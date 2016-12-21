/**
 * @file   Image.js
 * @brief  Base UI Image Class
 * @author simpart
 */

mofron.parts.Image = class extends mofron.parts.Base {
    getTarget () {
        try {
            return this.vdom.getChild(0);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initContents (vd, prm) {
        try {
            if ('string' !== (typeof prm)) {
                throw new Error('invalid parameter');
            }
            var image = new mofron.util.Vdom('img');
            image.setAttr('src', prm);
            vd.addChild(image);
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
            var _val = (val === undefined) ? null : val;
            if (null === _val) {
                return this.getTarget().getAttr('width');
            }
            if ('number' !== (typeof _val)) {
                throw new Error('invalid parameter');
            }
            this.getTarget().setAttr('width', val);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    height (val) {
        try {
            var _val = (val === undefined) ? null : val;
            if (null === _val) {
                return this.getTarget().getAttr('height');
            }
            if ('number' !== (typeof _val)) {
                throw new Error('invalid parameter');
            }
            this.getTarget().setAttr('height', val);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
