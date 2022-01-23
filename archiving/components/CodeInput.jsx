import React, { useCallback } from 'react';
import { FormField } from '@sanity/base/components';
import AceEditor from 'react-ace';
import PatchEvent, { set, unset } from '@sanity/form-builder/PatchEvent';

import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/mode-javascript';

const CodeInput = React.forwardRef((props, ref) => {
    const {
        type, // 스키마정보
        value, // 현재 필드 값
        markers,
        presence,
        compareValue,
        onChange, // PatchEvent 이벤트 핸들 메소드
    } = props;

    const handleChange = React.useCallback(
        (event) => {
            const inputValue = event.currentTarget.value;
            onChange(PatchEvent.from(inputValue ? set(inputValue) : unset()));
        },
        [onChange]
    );

    return (
        <FormField
            description={type.description} // 스키마에 설명 추가
            title={type.title} // 스키마 타이틀 추가
            __unstable_markers={markers}
            __unstable_presence={presence} // presence avatars 핸들
            compareValue={compareValue} // "edited" 상태 핸들
        >
            <AceEditor
                mode='javascript'
                name='ace-editor-code'
                theme='github'
                ref={ref}
                width='100%'
                value={value}
                tabSize={2}
                setOptions={{ useWorker: false }}
                style={{
                    lineHeight: 1.4,
                }}
                onChange={handleChange}
            />
        </FormField>
    );
});

export default CodeInput;
