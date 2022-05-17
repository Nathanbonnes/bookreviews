
def request_random_number():
    with open('./microservice/pipeline.txt', 'w') as a:
        a.write("50")
        a.close()


if __name__ == "__main__":
    request_random_number()