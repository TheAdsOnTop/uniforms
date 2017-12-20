import React          from 'react';
import connectField   from '@aot/uniforms/connectField';
import filterDOMProps from '@aot/uniforms/filterDOMProps';
import nothing        from '@aot/uniforms/nothing';

const Error = ({children, error, errorMessage, ...props}) =>
    !error ? nothing : (
        <div {...filterDOMProps(props)}>
            {children ? (
                children
            ) : (
                <div style={{margin: '3px'}}>
                    {errorMessage}
                </div>
            )}
        </div>
    )
;

Error.defaultProps = {
    style: {
        backgroundColor: 'rgba(255, 85, 0, 0.2)',
        border: '1px solid rgb(255, 85, 0)',
        borderRadius: '7px',
        margin: '20px 0px',
        padding: '10px'
    }
};

export default connectField(Error, {initialValue: false});
