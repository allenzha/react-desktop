import React, { Component, PropTypes } from 'react';
import Margin, { marginPropTypes } from '../../style/margin';
import Padding, { paddingPropTypes } from '../../style/padding';
import FontSize, { fontSizePropTypes } from '../../style/fontSize';
import Dimension, { dimensionPropTypes } from '../../style/dimension';
import TextAlign, { textAlignPropTypes } from '../../style/textAlign';
import Hidden, { hiddenPropTypes } from '../../style/hidden';
import Alignment, { alignmentPropTypes } from '../../style/alignment';
import Background, { backgroundPropTypes } from '../../style/background/macOs';
import styles from './styles/10.11';

@Background()
@Alignment()
@Margin()
@Padding()
@FontSize()
@Dimension()
@TextAlign()
@Hidden()
class Text extends Component {
  static propTypes = {
    ...paddingPropTypes,
    ...alignmentPropTypes,
    ...backgroundPropTypes,
    ...hiddenPropTypes,
    ...textAlignPropTypes,
    ...marginPropTypes,
    ...fontSizePropTypes,
    ...dimensionPropTypes,
    color: PropTypes.string
  };

  static defaultProps = {
    color: '#000000'
  };

  render() {
    const { color, children, style, ...props } = this.props;

    return (
      <div style={{ ...styles.text, color, ...style }} {...props}>
        {children}
      </div>
    );

  }
}

export default Text;
