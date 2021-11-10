import numpy as np
arryset = [[15,13,17],[3,4,5],[11,12,-1]]
convert = np.asarray(arryset)
print(convert)
print('Diagonal (sum): ', np.trace(convert))
print('Diagonal (elements): ', np.diagonal(convert))
