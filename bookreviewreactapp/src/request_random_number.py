
def request_random_number():
    with open('./microservice/request.txt', 'w') as a:
        a.write("100")
        a.close()


if __name__ == "__main__":
    request_random_number()