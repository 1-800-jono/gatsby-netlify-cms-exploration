import Typography from 'typography'
import sternGroveTheme from 'typography-theme-stern-grove'

sternGroveTheme.baseFontSize = '14px';
sternGroveTheme.headerFontFamily = ['Montserrat','Baskerville', 'Georgia'];
sternGroveTheme.bodyFontFamily = ['Open sans', 'Helvetica'];
const typography = new Typography(sternGroveTheme);


export default typography