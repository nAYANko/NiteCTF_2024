import csv
import pandas as pd

# Read the CSV file
df = pd.read_csv("Farewell_Firewall/Network_Log.csv")

# Count cluster values
cluster_counts = df['cluster'].value_counts()
print("\nCluster Counts:")
print(cluster_counts)

# Assuming you have a DataFrame df loaded from the CSV
filtered_records = df[(df['cluster'] == 1) & (df['alert_level'] == 'high') & (df['user_role'] == 'admin')]
selected_columns = ['timestamp', 'user_id', 'user_role', 'alert_level', 'encryption_type']
#print(filtered_records[selected_columns])
#print(filtered_records.shape[0])

print(df[df['cluster'] == -1][selected_columns])