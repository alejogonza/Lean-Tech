suma = 0
init = 10
while init < 1000000:
    digit_sum = 0
    j = list(str(init))
    for x in j:
        digit = int(x) ** 5
        digit_sum += digit
    if digit_sum == init:
        suma += init
        print(init)
    init += 1

print(suma)
