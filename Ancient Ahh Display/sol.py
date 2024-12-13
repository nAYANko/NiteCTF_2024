import pandas as pd
import numpy as np

# Read the selected columns CSV
df = pd.read_csv('selected_columns.csv')

# Define the display module lookup table (converted from Verilog)
display_lookup = {
    0b00000: 0b1000000,
    0b00001: 0b1111001,
    0b00010: 0b0100100,
    0b00011: 0b0110000,
    0b00100: 0b0011001,
    0b00101: 0b0010010,
    0b00110: 0b0000010,
    0b00111: 0b1111000,
    0b01000: 0b0000000,
    0b01001: 0b0010000,
    0b01010: 0b0001000,
    0b01011: 0b0000011,
    0b01100: 0b1000110,
    0b01101: 0b0100001,
    0b01110: 0b0000100,
    0b01111: 0b0001110,
    0b10000: 0b0001001,
    0b10001: 0b1101111,
    0b10010: 0b1100001,
    0b10011: 0b1000111,
    0b10100: 0b0101011,
    0b10101: 0b0001100,
    0b10110: 0b0011000,
    0b10111: 0b0101111,
    0b11000: 0b0000111,
    0b11001: 0b1000001,
    0b11010: 0b0010001,
    0b11011: 0b1000110,
    0b11100: 0b1110000,
    0b11101: 0b0111111
}

# Function to convert row to binary input
def row_to_binary_input(row):
    # Order: V17, W16, W13, A3, W2 (from bottom to top as per comment)
    binary_input = (row['W2'] << 4) | (row['A3'] << 3) | (row['W13'] << 2) | (row['W16'] << 1) | row['V17']
    return binary_input

# Check each row against display module
def check_row(row):
    binary_input = row_to_binary_input(row)
    
    # Get 7-segment display output
    try:
        display_output = display_lookup.get(binary_input, 0b1110111)  # default case
    except KeyError:
        display_output = 0b1110111  # default case
    
    return {
        'Input': f'{binary_input:05b}',
        'Display Output': f'{display_output:07b}'
    }

# Process all rows
results = df.apply(check_row, axis=1)

# Convert results to DataFrame for easy viewing
results_df = pd.DataFrame(results.tolist())

# Print results
print(results_df)

# Optional: Save results to CSV
results_df.to_csv('display_module_check.csv', index=False)