// Import necessary modules
import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

// Register the Tokens Studio transforms
// This is necessary for the 'tokens-studio' preprocessor and 'ts/' transforms
register(StyleDictionary, {
    excludeParentKeys: true,
});

// Export the Style Dictionary configuration
export default {
    source: ['tokens/**/*.json'],
    preprocessors: ['tokens-studio'],
    platforms: {
        scss: {
            transforms: ['ts/size/px', 'ts/opacity', 'name/kebab'],
            buildPath: 'src/styles/',
            files: [
                {
                    destination: '_colors.scss',
                    format: 'scss/variables',
                    filter: (token) => token.$type === 'color',
                },
                {
                    destination: '_layout.scss',
                    format: 'scss/variables',
                    filter: (token) => token.$type === 'spacing',
                },
            ],
        },
    },
};