import React          from 'react';
import connectField   from '@aot/uniforms/connectField';
import filterDOMProps from '@aot/uniforms/filterDOMProps';
import injectName     from '@aot/uniforms/injectName';
import joinName       from '@aot/uniforms/joinName';

import AutoField from './AutoField';

const Nest = ({
    children,
    error,
    errorMessage,
    fields,
    itemProps,
    label,
    name,
    showInlineError,
    ...props
}) =>
    <div {...filterDOMProps(props)}>
        {label && (
            <label>
                {label}
            </label>
        )}

        {!!(error && showInlineError) && (
            <div>
                {errorMessage}
            </div>
        )}

        {children ? (
            injectName(name, children)
        ) : (
            fields.map(key =>
                <AutoField key={key} name={joinName(name, key)} {...itemProps} />
            )
        )}
    </div>
;

export default connectField(Nest, {ensureValue: false, includeInChain: false});
