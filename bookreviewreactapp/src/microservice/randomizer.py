
import random
import time


def randomizer():
    
    time.sleep(1)
    
    f = open('pipeline.txt', 'r')

    contents = f.read()

    if not contents:
        return 
    
    # checks for a single number
    if contents.isdigit():
        num = int(contents)
        rand = random.randrange(5, num) * 2

    with open('pipeline.txt', 'w') as w:
        if type(rand) == int:
            rand = str(rand)
            print(type(rand))
        w.write(rand)
        w.close()
        return
        
    
if __name__ == "__main__":
    while True:
        randomizer()
