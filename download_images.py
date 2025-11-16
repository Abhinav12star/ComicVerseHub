import os
import requests

# Create images folder if it doesn't exist
os.makedirs("images", exist_ok=True)

# Comic image URLs and filenames
comics = [
    ("https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=800&h=1200&fit=crop", "spiderman.jpg"),
    ("https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=800&h=1200&fit=crop", "batman.jpg"),
    ("https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&h=1200&fit=crop", "wonderwoman.jpg"),
    ("https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=800&h=1200&fit=crop", "flash.jpg"),
    ("https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&h=1200&fit=crop", "saga.jpg"),
    ("https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=800&h=1200&fit=crop", "walkingdead.jpg"),
    ("https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=800&h=1200&fit=crop", "thor.jpg"),
    ("https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&h=1200&fit=crop", "blackpanther.jpg"),
    ("https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=1200&fit=crop", "aquaman.jpg"),
    ("https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=800&h=1200&fit=crop", "greenlantern.jpg"),
    ("https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=800&h=1200&fit=crop", "spawn.jpg"),
    ("https://images.unsplash.com/photo-1635863138275-d9b33299680b?w=800&h=1200&fit=crop", "avengers.jpg"),
    ("https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?w=800&h=1200&fit=crop", "justiceleague.jpg"),
    ("https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=800&h=1200&fit=crop", "daredevil.jpg"),
    ("https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&h=1200&fit=crop", "sandman.jpg")
]

# Download each image
for url, filename in comics:
    response = requests.get(url)
    if response.status_code == 200:
        with open(f"images/{filename}", "wb") as f:
            f.write(response.content)
        print(f"Downloaded {filename}")
    else:
        print(f"Failed to download {filename}")
