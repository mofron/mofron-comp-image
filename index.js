/**
 * @file   image.js
 * @brief  image component class
 * @author simpart
 */

mofron.comp.Image = class extends mofron.Component {
    
    initDomConts (prm) {
        try {
            if ('string' !== (typeof prm)) {
                throw new Error('invalid parameter');
            }
            var image = new mofron.Dom('img',this);
            image.attr('src', prm);
            this.vdom().addChild(image);
            this.target(image);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    size (hei, wid) {
        try {
            var _hei = (hei === undefined) ? null : hei;
            var _wid = (wid === undefined) ? null : wid;
            if ((null === _hei) || (null === _wid)) {
                return [
                    this.height(),
                    this.width()
                ];
            }
            this.height(hei);
            this.width(wid);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    width (val) {
        try {
            if (undefined === val) {
                /* getter */
                return mofron.func.getLength(
                           this.target().style('width')
                       );
            }
            /* setter */
            if ('number' === (typeof val)) {
                this.target().style('width', val + 'px');
            } else if ('string' === typeof val) {
                this.target().style('width', val);
            } else {
                throw new Error('invalid parameter');
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    height (val) {
        try {
            if (undefined === val) {
                /* getter */
                return mofron.func.getLength(
                           this.target().style('height')
                       );
            }
            /* setter */
            if ('number' === (typeof val)) {
                this.target().style('height', val + 'px');
            } else if ('string' === typeof val) {
                this.target().style('height', val);
            } else {
                throw new Error('invalid parameter');
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.Image;
