# Esther Eva - Image Assets Folder

Place your own photography and logos in this `images/` folder to personalize your website.

### Suggested File Names:
- `images/logo.png` - Brand logo with transparent background
- `images/hero.jpg` - Main hero section image
- `images/bouquet.jpg` - Handmade Bouquets
- `images/scrapbook.jpg` - Memory Scrapbooks
- `images/giftbox.jpg` - Curated Gift Boxes
- `images/ring-platter.jpg` - Wedding Ring Platters
- `images/keychain.jpg` - Custom Keychains
- `images/wallet.jpg` - Handmade Wallets
- `images/hamper.jpg` - Luxury Gift Hampers
- `images/polaroid.jpg` - Polaroid Keepsakes
- `images/gallery1.jpg` to `images/gallery8.jpg` - Instagram Gallery showcase images

### How to use your local images:
In `index.html` and `script.js`, replace the `src="..."` attributes with your local paths:
For example:
```html
<img src="images/bouquet.jpg" alt="Handmade Bouquets" class="product-image">
```
The website already has automated fallback handling so if an image is missing or loading, it displays an aesthetic handmade placeholder without breaking the layout.

