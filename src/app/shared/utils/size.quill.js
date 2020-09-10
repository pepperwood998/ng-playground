import Quill from 'quill';
const Parchment = Quill.import('parchment');

class SizeStyleAttributor extends Parchment.Attributor.Style {
  value(node) {
    console.log(node);
    return super.value(node).replace(/["']/g, '');
  }
}

let SizeStyle = new SizeStyleAttributor('size', 'font-size', {
  scope: Parchment.Scope.INLINE,
  whitelist: ['10px', '18px', '32px']
});

export { SizeStyle };
