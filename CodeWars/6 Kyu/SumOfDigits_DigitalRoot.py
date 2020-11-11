def digital_root(n):
    while n >= 10:
        n = add_num(n)
    return n
    
def add_num(n):
    num = str(n)
    total = int(num[0])
    for i in range(1,len(num)):
        total = total + int(num[i])
    return total

# Kata called Sum of Digits / Digital Root