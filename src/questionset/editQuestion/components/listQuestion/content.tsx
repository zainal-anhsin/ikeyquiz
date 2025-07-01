import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { HeadingLg, SectionTitle } from "../../../../components/common/Text/Text";
import { Form } from "../../../../components/common/Form/Form";
import { ButtonMediumWhitePurple } from "../../../../components/common/Button/Button";
import { DeleteOutlined } from "@ant-design/icons";
import { FormInput } from "../../../../components/common/Form/Form";

interface ContentProps {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; correct: boolean }[];
  setOptions: React.Dispatch<React.SetStateAction<{ value: string; correct: boolean }[]>>;
}

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const Content: React.FC<ContentProps> = ({ value, onChange, options, setOptions }) => {
  const handleOptionChange = (idx: number, val: string) => {
    setOptions(options => options.map((opt, i) => i === idx ? { ...opt, value: val } : opt));
  };

  const handleSetCorrect = (idx: number) => {
    setOptions(options => options.map((opt, i) => ({ ...opt, correct: i === idx })));
  };

  const handleRemove = (idx: number) => {
    setOptions(options => options.filter((_, i) => i !== idx));
  };

  const handleAdd = () => {
    setOptions(options => [...options, { value: "", correct: false }]);
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'align': [] }],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
    'link', 'image',
    'align'
  ];

  return (
    <div style={{ flex: 1 }}>
      <HeadingLg>Content</HeadingLg>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        style={{marginTop: 24, height: 300 }}
      />
      {/* Answer & Options Section */}
      <div style={{ marginTop: 70}}>
        <HeadingLg>Edit Answer & Options</HeadingLg>
        <Form>
          {options.map((opt, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 24 }}>
              <SectionTitle>{alphabet[idx]}</SectionTitle> 
              <FormInput
                value={opt.value}
                onChange={e => handleOptionChange(idx, e.target.value)}
                placeholder={`Option ${alphabet[idx]}`}
                style={{ width: 850 }}
              />
              <ButtonMediumWhitePurple
                style={{
                  background: opt.correct ? '#7c3aed' : '#fff',
                  color: opt.correct ? '#fff' : '#7c3aed',
                  borderColor: '#7c3aed',
                  width: '600px'
                }}
                onClick={() => handleSetCorrect(idx)}
              >
                {opt.correct ? <span style={{fontWeight:700}}>&#10003; Correct</span> : "Set as Correct"}
              </ButtonMediumWhitePurple>
              <DeleteOutlined
                style={{ color: '#7c3aed', fontSize: 22, cursor: 'pointer' }}
                onClick={() => handleRemove(idx)}
              />
            </div>
          ))}
        </Form>
        <ButtonMediumWhitePurple onClick={handleAdd} style={{ marginTop: 24 }}>
          + Add Answer
        </ButtonMediumWhitePurple>
      </div>
    </div>
  );
};

export default Content;