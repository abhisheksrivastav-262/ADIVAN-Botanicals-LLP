# Adivan product pack photography — drop-in folder

The website automatically displays supplied PPT-extracted pack photos.
Save each image as:

  /public/products/hair/<slug>.png        (or .jpg / .jpeg / .webp)
  /public/products/syrups/<slug>.png
  /public/products/nutrition/<slug>.png

## Exact filenames expected

hair/                 syrups/                    nutrition/
- hair-pure-shampoo   - uterine-syrup            - adivan-nutrition
- hair-conditioner    - multivitamin-syrup
- hair-grow-tablets   - liver-3x-syrup
- hair-grow-shampoo   - liver-syrup
- hair-grow-serum     - iron-syrup
- hair-grow-oil       - enzyme-syrup
                      - adilyco-syrup
                      - acidity-syrup
                      - piles-syrup
                      - stone-syrup

## To extract from a.pptx / b.pptx

1. Duplicate the .pptx, rename the copy's extension to .zip and unzip it,
   OR open the PPT in PowerPoint / Keynote.
2. Copy images from `ppt/media/` (zip method) or right-click → Save as Picture.
3. Rename each image to its slug above and place it in the matching folder.
4. Keep packaging fully visible — the site uses `object-fit: contain`
   (never cropped, never stretched).

Until an image is added, the site shows an elegant monogram placeholder —
no stock packaging and no fake labels are ever used.

## Brand / founder imagery (optional)

  /public/brand/      logo, brand marks
  /public/founders/   founder portraits (dr-narayan-prasad-patel.*, dr-hema-patel.*)
