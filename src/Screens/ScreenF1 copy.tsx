import InlineSVG from 'react-inlinesvg';

const MyComponent = () => (
  <div style={{ width: '300px', height: '300px' }}>
    <InlineSVG 
      src="/assets/12.svg"
      style={{
        width: '100%',
        height: '100%',
        background: 'transparent'
      }}
    />
  </div>
);

export default MyComponent;
