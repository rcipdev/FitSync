import { useState } from 'react';
import { Form, Input, Select } from 'antd';
import dayjs from 'dayjs';
import { DatePicker } from 'antd';
import useLanguage from '@/locale/useLanguage';
import AutoCompleteAsync from '@/components/AutoCompleteAsync';

// ... (existing imports and code)

export default function LeadForm() {
  const translate = useLanguage();

  const [selectedBreakfast, setSelectedBreakfast] = useState('');
  const [otherBreakfastValue, setOtherBreakfastValue] = useState('');

  const [selectedLunch, setSelectedLunch] = useState('');
  const [otherLunchValue, setOtherLunchValue] = useState('');

  const [selectedSnacks, setSelectedSnacks] = useState('');
  const [otherSnacksValue, setOtherSnacksValue] = useState('');

  const [selectedDinner, setSelectedDinner] = useState('');
  const [otherDinnerValue, setOtherDinnerValue] = useState('');

  const handleBreakfastChange = (value) => {
    setSelectedBreakfast(value);

    if (value !== 'Others') {
      setOtherBreakfastValue('');
    }
  };

  const handleBreakfastInputChange = (e) => {
    setOtherBreakfastValue(e.target.value);
  };

  const handleLunchChange = (value) => {
    setSelectedLunch(value);

    if (value !== 'Others') {
      setOtherLunchValue('');
    }
  };

  const handleLunchInputChange = (e) => {
    setOtherLunchValue(e.target.value);
  };

  const handleSnacksChange = (value) => {
    setSelectedSnacks(value);

    if (value !== 'Others') {
      setOtherSnacksValue('');
    }
  };

  const handleSnacksInputChange = (e) => {
    setOtherSnacksValue(e.target.value);
  };

  const handleDinnerChange = (value) => {
    setSelectedDinner(value);

    if (value !== 'Others') {
      setOtherDinnerValue('');
    }
  };

  const handleDinnerInputChange = (e) => {
    setOtherDinnerValue(e.target.value);
  };

  const getFormItemRules = (selectedValue) => {
    const rules = [{ required: true }];
    if (selectedValue === 'Others') {
      rules.push({ required: true, message: 'Please enter your option!' });
    }
    return rules;
  };

  return (
    <>
      {/* Your Form.Item components for Day, Breakfast, Lunch, Snacks, Dinner */}
      <Form.Item
        name="client"
        label={'Family Member'}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <AutoCompleteAsync
          entity={'client'}
          displayLabels={['company']}
          searchFields={'company'}
          // onUpdateValue={autoCompleteUpdate}
        />
      </Form.Item>
      <Form.Item
        name="date"
        label={translate('date')}
        rules={[
          {
            required: true,
            type: 'object',
          },
        ]}
        initialValue={dayjs().add(30, 'days')}
        style={{ width: '100%' }}
      >
        <DatePicker format={'DD/MM/YYYY'} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        label={translate('Breakfast')}
        name="breakfast"
        rules={getFormItemRules(selectedBreakfast)}
        initialValue={'Select'}
      >
        <Select
          onChange={handleBreakfastChange}
          options={[
            { value: 'Select', label: translate('Select') },
            { value: 'Oatmeal', label: translate('Oatmeal') },
            { value: 'Whole Grain Toast', label: translate('Whole Grain Toast') },
            { value: 'Nuts', label: translate('Nuts') },
            { value: 'Green Tea', label: translate('Green Tea') },
            { value: 'eggs', label: translate('eggs') },
            { value: 'Greek Yogurt', label: translate('Greek Yogurt') },
            { value: 'Others', label: translate('Others') },
          ]}
        />
        {selectedBreakfast === 'Others' && (
          <Input
            placeholder="Enter other breakfast option"
            onChange={handleBreakfastInputChange}
            value={otherBreakfastValue}
          />
        )}
      </Form.Item>

      <Form.Item
        label={translate('Lunch')}
        name="lunch"
        rules={getFormItemRules(selectedLunch)}
        initialValue={'Select'}
      >
        <Select
          onChange={handleLunchChange}
          options={[
            { value: 'Select', label: translate('Select') },
            { value: 'Chicken Salad', label: translate('Chicken Salad') },
            { value: 'Quinoa Bowl', label: translate('Quinoa Bowl') },
            { value: 'Avocado Wrap', label: translate('Avocado Wrap') },
            { value: 'Vegetarian Stir-Fry', label: translate('Vegetarian Stir-Fry') },
            { value: 'Sweet Potato', label: translate('Sweet Potato') },
            { value: 'Vegetable Soup', label: translate('Vegetable Soup') },
            { value: 'Others', label: translate('Others') },
          ]}
        />
        {selectedLunch === 'Others' && (
          <Input
            placeholder="Enter other lunch option"
            onChange={handleLunchInputChange}
            value={otherLunchValue}
          />
        )}
      </Form.Item>

      <Form.Item
        label={translate('Snacks')}
        name="snacks"
        rules={getFormItemRules(selectedSnacks)}
        initialValue={'Select'}
      >
        <Select
          onChange={handleSnacksChange}
          options={[
            { value: 'Select', label: translate('Select') },
            { value: 'Fresh Fruits', label: translate('Fresh Fruits') },
            { value: 'Vegetable Sticks', label: translate('Vegetable Sticks') },
            { value: 'Nuts and Seeds', label: translate('Nuts and Seeds') },
            { value: 'Hard-Boiled Eggs', label: translate('Hard-Boiled Eggs') },
            { value: 'Homemade Smoothies', label: translate('Homemade Smoothies') },
            { value: 'Cottage Cheese', label: translate('Cottage Cheese') },
            { value: 'Others', label: translate('Others') },
          ]}
        />
        {selectedSnacks === 'Others' && (
          <Input
            placeholder="Enter other snacks option"
            onChange={handleSnacksInputChange}
            value={otherSnacksValue}
          />
        )}
      </Form.Item>

      <Form.Item
        label={translate('Dinner')}
        name="dinner"
        rules={getFormItemRules(selectedDinner)}
        initialValue={'Select'}
      >
        <Select
          onChange={handleDinnerChange}
          options={[
            { value: 'Select', label: translate('Select') },
            { value: 'Grilled Chicken', label: translate('Grilled Chicken') },
            { value: 'Vegetable Stir-Fry', label: translate('Vegetable Stir-Fry') },
            { value: 'Brown Rice Bowls', label: translate('Brown Rice Bowls') },
            { value: 'Salmon with Vegetables', label: translate('Salmon with Vegetables') },
            { value: 'Veggie Burgers', label: translate('Veggie Burgers') },
            { value: 'Mediterranean Platter', label: translate('Mediterranean Platter') },
            { value: 'Others', label: translate('Others') },
          ]}
        />
        {selectedDinner === 'Others' && (
          <Input
            placeholder="Enter other dinner option"
            onChange={handleDinnerInputChange}
            value={otherDinnerValue}
          />
        )}
      </Form.Item>

      <Form.Item
        label={translate('status')}
        name="status"
        rules={[
          {
            required: true,
          },
        ]}
        initialValue={'Planned'}
      >
        <Select
          options={[
            { value: 'Planned', label: translate('Planned') },
            { value: 'Under Consumed', label: translate('Under Consumed') },
            { value: 'Over Consumed', label: translate('Over Consumed') },
            { value: 'Completed', label: translate('Completed') },
          ]}
        ></Select>
      </Form.Item>
    </>
  );
}
