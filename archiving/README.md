# Sanity Blogging

-   Sanity 를 블로그 탬플릿을 이용하여 블로그 생성

<br>

## :fire: 1. 설치 방법 및 실행

```bash

# sanity 패키지 전역 설치
yarn add @sanity/cli -g


# sanity 로그인
sanity login


# sanity 프로젝트 시작
sanity init
sanity start

# sanity 배포
sanity deploy

```

## :cyclone: [결과물](https://function-holabee.sanity.studio/)

<br>

## :train: Customed Sanity Components

: Sanity에서 지원하는 기본적인 UI 컴포넌트를 커스텀하여 스키마에 적용

```javascript
// /components/CodeInput.jsx

import React from 'react';
import { FormField } from '@sanity/base/components';
// react-ace 라이브러리
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/mode-javascript';

const CodeInput = React.forwardRef((props, ref) => {
    const {
        type, // 스키마정보
        value, // 현재 필드 값
        readOnly,
        placeholder,
        markers,
        presence,
        compareValue,
        onFocus,
        onBlur,
    } = props;

    return (
        <FormField
            description={type.description} // 스키마에 설명 추가
            title={type.title} // 스키마 타이틀 추가
            __unstable_markers={markers}
            __unstable_presence={presence} // presence avatars 핸들
            compareValue={compareValue} // "edited" 상태 핸들
        >
            <TextInput
                value={value}
                readOnly={readOnly} // 편집 불가능
                placeholder={placeholder} // placeholder 정의
                onFocus={onFocus} // Focus 이벤트
                onBlur={onBlur} // Blur 이벤트
                ref={ref}
            />
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
            />
        </FormField>
    );
});

// 스키마에서 사용할 수 있도록 export
export default CodeInput;
```

```jaavscript

// ./schemas/Code.js
import CodeInput from '../components/CodeInput';

export default {
    ..
    fields: [
        {
            name: 'code',
            title: 'Code',
            type: 'string',
            validation: (Rule) => Rule.required(),
            inputComponent: CodeInput,
        },
    ],
};

```

<br>

## :speech_balloon: Reference

-   [Sanity](https://www.sanity.io/)
-   [Customed input](https://www.sanity.io/docs/custom-input-widgets)
