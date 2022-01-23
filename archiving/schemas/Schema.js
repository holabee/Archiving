import createSchema from 'part:@sanity/base/schema-creator';

import schemaTypes from 'all:part:@sanity/base/schema-type';

import blockContent from './blockContent';
import tag from './Tag';
import post from './Post';
import author from './Author';
import home from './Home';
import code from './Code';
import link from './Link';

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([post, author, code, tag, blockContent, home, link]),
});
