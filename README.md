# jQuery Fit
Lightweight jQuery plugin for expanding an element's height

## Usage

    $('#some_element').fit(options);

## Options (with default values)

    width: false, // enable/disable width fitting
    height: false, // enable/disable height fitting
    widthMargin: 0, // width to discount (useful if your element has padding/margin)
    heightMargin: 0, // height to discount (useful if your element has padding/margin)
    widthClip: null, // if you want to clip the width to another element rather than the document
    heightClip: null // if you want to clip the height to another element rather than the document

## Example

    $('#some_element').fit({
        height: true,
        heightClip: '#another_element_below'
    });