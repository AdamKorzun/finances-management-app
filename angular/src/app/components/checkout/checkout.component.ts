import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { loadStripe } from '@stripe/stripe-js';
import { CheckoutService } from 'src/app/services/checkout.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  stripePromise: any;
  @Input()
  customerId: string = '';

  constructor(private auth: AuthService, private cs: CheckoutService) {}

  // Open the checkout handler
  async checkout() {
    this.cs.fetchSessionId().subscribe(async (sessId) => {
      const stripe = await this.stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId: sessId.sessionId,
      });

      if (error) {
        console.error(error);
      }
    });
  }

  // Close on navigate
  ngOnInit() {
    this.stripePromise = loadStripe(
      'pk_test_51N8yDYDw5Fv2IHat64hVPaVSqbeeq5rgbfirhkqTXrKkENNvc0mri9KL8KSmVUMjfVOYAoj1A7sVWuAdHZmADek3007EcEbKZ4'
    );
  }
}
