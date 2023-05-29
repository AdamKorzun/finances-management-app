from accounts.utils import jwt_decode_token


def get_stripe_id_from_request(request):
    token = request.META.get(
        'HTTP_AUTHORIZATION', " ").split(' ')[1]
    stripe_id = jwt_decode_token(token).get("stripeId")
    return stripe_id
