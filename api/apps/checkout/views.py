from django.shortcuts import render
from rest_framework.views import APIView
import stripe
from rest_framework.response import Response
from checkout.utils import get_stripe_id_from_request
from project import settings
from rest_framework.permissions import AllowAny

stripe.api_key = settings.STRIPE_SECRET_KEY


class StripeSessionView(APIView):

    def get(self, request, format=None):
        stripe_id = get_stripe_id_from_request(self.request)
        if not stripe_id:
            return Response(401)

        pay_data = {
            "quantity": 1,
            "price": "price_1N9ukWDw5Fv2IHatWOc9PYNH"
        }

        checkout_session = stripe.checkout.Session.create(
            success_url=settings.PAYMENT_SUCCESS_URL,
            cancel_url=settings.PAYMENT_CANCEL_URL,
            payment_method_types=['card'],
            mode='subscription',
            line_items=[
                pay_data,
            ],
            customer=stripe_id
        )
        return Response({'sessionId': checkout_session['id']})


class StripeWebhookView(APIView):
    permission_classes = (AllowAny,)

    """
    StripeWebhookView is responsible to handle the webhook
    events of /webhook/ endpoint.
    """

    def post(self, request, format=None):
        endpoint_secret = "whsec_12c5797cabbeddc917901037b47a90ebf07053b809f9ed6c280bfbcd68583e9f"
        sig_header = request.META['HTTP_STRIPE_SIGNATURE']

        try:
            event = stripe.Webhook.construct_event(
                request.body, sig_header, endpoint_secret
            )
        except ValueError as e:
            print(e)
            return Response(status=400)
        except stripe.error.SignatureVerificationError as e:
            print(e)
            return Response(status=400)

        if event['type'] == 'checkout.session.completed':
            print(event["data"]["object"]["payment_intent"])
            print(event)
            print('PAYMENT SUCCESS')
        return Response(status=200)
