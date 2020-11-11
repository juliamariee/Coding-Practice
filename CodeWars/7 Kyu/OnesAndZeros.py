def binary_array_to_number(arr):
    total = 0
    for i in range(0, len(arr)):
        j = len(arr) - i - 1
        total += arr[j] * (2 ** i)
    return total