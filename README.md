# gatsby-remark-phoneno-emailid-link

Gatsby remark plugin to add `tel:` or `mailto:` for anchors href.

## The problem

Lot of times we want to add `tel:` or `mailto:` for anchor tags like `<a href="tel:9876543210">9876543210</a>` or for mail id `<a href="mailto:test@gmail.com">test@gmail.com</a>`.

## The solution

`gatsby-remark-phoneno-emailid-link` plugin gives us that flexibility to modify anchor tags which has mail id or phone number.

## Example

```markdown
[9876543210](9876543210)
[test@gmail.com](test@gmail.com)
[noTransform:9876543210](9876543210)
```

Converts to

```html
<a href="tel:9876543210">9876543210</a>
<a href="tel:test@gmail.com">test@gmail.com</a>
<a href="9876543210">9876543210</a>
```

## Installation

```
npm i gatsby-remark-phoneno-emailid-link
```

## Setup

This library has a required peerDependencies listing for [gatsby](https://www.gatsbyjs.org/) and should be used as a plugin for [gatsby-transformer-remark](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-remark)

```javascript
// In your gatsby-config.js

module.exports = {
  ...
  plugins: [
    ...
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-phoneno-emailid-link`,
            options: {
              ...
            }
          }
        ],
      },
    }
  ]
}
```

## Options

- `phoneNumberRegexp` - Accepts custom regexp for phone number validation.
- `emailIdRegexp` - Accepts custom regexp for email id validation.
- `noTransformFlag` - Accepts flag for no transform.

## License

MIT