def persistence(n):
    iterations = 0
    while n >= 10:
        n = mult_num(n)
        iterations = iterations + 1
    return iterations
    
def mult_num(n):
    num = str(n)
    total = int(num[0])
    for i in range(1,len(num)):
        total = total * int(num[i])
    return total