import requests

test = requests.get("https://script.google.com/macros/s/AKfycbxtKOeNkN-TSE1HvGCSuWQ_1YW424-OGgqJgc0oa2I5Zhw8q72slRvWm-zTevOLNIv_/exec?action=getUsers&token=wongsakron").json()

print(test)