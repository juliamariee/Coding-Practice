def array_diff(a, b):
    for i in range(0, len(b)):
        while b[i] in a:
            a.remove(b[i])
    return a

# Kata called array.diff