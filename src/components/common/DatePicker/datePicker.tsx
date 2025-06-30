import React from 'react';
import { DatePicker } from 'antd';
import type { DatePickerProps } from 'antd';
import en from 'antd/es/date-picker/locale/en_US';
import dayjs from 'dayjs';
import buddhistEra from 'dayjs/plugin/buddhistEra';

dayjs.extend(buddhistEra);

// Component level locale
const buddhistLocale: typeof en = {
  ...en,
  lang: {
    ...en.lang,
    dateFormat: 'BBBB-MM-DD',
    dateTimeFormat: 'BBBB-MM-DD HH:mm:ss',
    yearFormat: 'BBBB',
  },
};

interface CustomDatePickerProps extends Omit<DatePickerProps, 'onChange'> {
  onChange?: (date: dayjs.Dayjs | null, dateStr: string) => void;
  showTime?: boolean;
  placeholder?: string;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  onChange,
  showTime = false,
  placeholder = 'Select date',
  ...props
}) => {
  const handleChange: DatePickerProps['onChange'] = (date, dateStr) => {
    if (onChange) {
      // Handle the date conversion properly
      let dayjsDate: dayjs.Dayjs | null = null;
      if (date) {
        // If date is already a dayjs object, use it directly
        if (dayjs.isDayjs(date)) {
          dayjsDate = date;
        } else {
          // If it's a moment object or other date object, convert to dayjs
          // Use toDate() to get a Date object that dayjs can handle
          dayjsDate = dayjs((date as any).toDate ? (date as any).toDate() : date);
        }
      }
      onChange(dayjsDate, dateStr);
    }
  };

  return (
    <DatePicker
      showTime={showTime}
      locale={buddhistLocale}
      onChange={handleChange}
      placeholder={placeholder}
      format={showTime ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD"}
      {...props}
    />
  );
};

export default CustomDatePicker;