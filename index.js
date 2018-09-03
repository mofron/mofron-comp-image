/**
 * @file   mofron-comp-image/index.js
 * @author simpart
 */

/**
 * @class Image
 * @brief image component for mofron
 */
mofron.comp.Image = class extends mofron.Component {
    
    constructor (po) {
        try {
            super();
            this.name('Image');
            this.prmMap('path');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts () {
        try {
            this.adom().addChild(
                new mofron.Dom('img', this)
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    path (val) {
        try {
            if (undefined === val) {
                /* getter */
                return this.target().attr('src');
            }
            /* setter */
            if ('string' !== typeof val) {
                throw new Error('invalid parameter');
            }
            this.target().attr({ src : val });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.Image;
/* end of file */
