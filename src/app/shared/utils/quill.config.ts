import Quill from 'quill';
const DirectionAttribute = Quill.import('attributors/attribute/direction');
Quill.register(DirectionAttribute, true);
const AlignClass = Quill.import('attributors/class/align');
Quill.register(AlignClass, true);
const BackgroundClass = Quill.import('attributors/class/background');
Quill.register(BackgroundClass, true);
const ColorClass = Quill.import('attributors/class/color');
Quill.register(ColorClass, true);
const DirectionClass = Quill.import('attributors/class/direction');
Quill.register(DirectionClass, true);
const FontClass = Quill.import('attributors/class/font');
Quill.register(FontClass, true);
const SizeClass = Quill.import('attributors/class/size');
Quill.register(SizeClass, true);
const AlignStyle = Quill.import('attributors/style/align');
Quill.register(AlignStyle, true);
const BackgroundStyle = Quill.import('attributors/style/background');
Quill.register(BackgroundStyle, true);
const ColorStyle = Quill.import('attributors/style/color');
Quill.register(ColorStyle, true);
const DirectionStyle = Quill.import('attributors/style/direction');
Quill.register(DirectionStyle, true);
const FontStyle = Quill.import('attributors/style/font');
Quill.register(FontStyle, true);
const Parchment = Quill.import('parchment');
const Block = Parchment.query('block');
Block.tagName = 'DIV';
Quill.register(Block, true);

import { IndentStyle } from './indent.quill';
Quill.register(IndentStyle, true);
// import { SizeStyle } from './size.quill';
// Quill.register(SizeStyle, true);

export const quillConfig = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    ['code-block'],
    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
    [{ indent: '-1' }, { indent: '+1' }], // outdent/indent

    [{ size: ['small', false, 'large', 'huge'] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }],
    [{ font: [] }],
    [{ align: [] }],

    ['clean'], // remove formatting button

    ['link']
  ]
};
