import { render, screen } from '@testing-library/react'
import { GifItem } from "../../src/components/GifItem"

describe('Test in <GifItem />', () => {

    const title = 'Saitama';
    const url   = 'https://one-punch.com/saitama.jpg';

    test('Must match the snapshot', () => {
        const { container} = render( <GifItem title={ title } url={ url }/>);
        expect(container).toMatchSnapshot();
    });

    test('Must display the image with the URL and the ALT indicated', () => {
        render(<GifItem title={title} url={url} />)
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    });

    test('You must display the title in the component', () => {
        render(<GifItem title={ title } url={ url }/>)
        expect(screen.getByText(title)).toBeTruthy();
    });
    
    
});

