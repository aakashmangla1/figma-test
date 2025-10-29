import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

register(StyleDictionary, {
    excludeParentKeys: true,
});

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