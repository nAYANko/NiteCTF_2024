from rAnDoM import *
from Crypto.Util.number import long_to_bytes

def reverse_random_sequence(yap):
    # Split the `yap` string into 32-bit chunks (as hex strings), remove "0x" prefix
    random_numbers = [int(yap[i:i+8], 16) for i in range(0, len(yap), 10)]  # each hex is 8 chars (32 bits) + '0x'

    flag_chunks = []
    for i in range(0, len(random_numbers), 6):  # 6 random numbers per flag chunk
        # Attempt to find the seed for this chunk by brute-forcing the seed
        for possible_seed in range(2**32):  # Assuming 32-bit chunk values, range from 0 to 2^32-1
            rAnDoM.sEeD(possible_seed)
            generated = []
            for _ in range(6):  # We generate 6 numbers
                generated.append(rAnDoM.gEtRanDBitS(32))

            # Compare generated sequence with the expected sequence
            if generated == random_numbers[i:i+6]:
                flag_chunks.append(long_to_bytes(possible_seed))  # Convert the seed back to bytes
                break

    return b''.join(flag_chunks)

# Example usage
yap = "0xef6ff40f0x8b18b98a0x9d0bbac80x6fb7ef770x2d951fc50xff8a25160xbbfdc2040xf220f9b10x5719a00d0xb1282eb90xd2f998d00xf69dbed50xcf060ec40x5927208f0x7d61ee430xfde565e30xf5b8ff5e0x3768f0dd0x6ded6f680x58a5ec3c0xa5f018b80xcaba6cf50xd56d9fd00x8d1746870x572e5fa90x93c6c27d0xede60bca0xb554453b0x83211af80x35d53b580x1d31f12e0x89b9ad360x81ace1c00x36dadebd0x146f624e0x4c10e9260xa3a2e4d60x728e18c90xb301ce5a0x283fc7020x310bcd900x833c81f80x23420e2a0x6af59eaf0xb2cc8a750x97512aef0x8a5b383f0xf0c0a4b"  # Replace with actual `yap` output
flag = reverse_random_sequence(yap)
print(f"Recovered flag: {flag.decode()}")