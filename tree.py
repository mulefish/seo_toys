import os

# Define prefixes and suffixes to ignore
ignore_prefixes = ["node_modules", ".", "fonts"]
ignore_suffixes = [".mjs", ".svg", ".json", ".woff", ".ico"]

def print_directory_tree(base_dir, indent=0):
    try:
        for entry in sorted(os.listdir(base_dir)):  # Sort entries for consistent output
            # Skip entries that match the ignore prefixes or suffixes
            if any(entry.startswith(prefix) for prefix in ignore_prefixes) or \
               any(entry.endswith(suffix) for suffix in ignore_suffixes):
                continue

            full_path = os.path.join(base_dir, entry)

            # Check if the entry is a directory
            if os.path.isdir(full_path):
                print("    " * indent + f"-------------------- {entry}")
                print_directory_tree(full_path, indent + 1)  # Recurse into the directory
            else:
                # Print files
                print("    " * indent + entry)
    except PermissionError:
        print("    " * indent + "[Permission Denied]")

# Specify the base directory to start the traversal
base_directory = "./seo-this/"  # Current directory
print_directory_tree(base_directory)
