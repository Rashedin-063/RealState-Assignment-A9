import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure you have this line in your main file if not already

const getDataFromLS = () => {
  try {
    const storedData = localStorage.getItem('items');
    return storedData ? JSON.parse(storedData) : [];
  } catch (error) {
    console.error('Error retrieving data from local storage:', error);
    return [];
  }
};

const saveDataToLS = (item) => {
  try {
    const storedData = getDataFromLS();
    const isExist = storedData.find((data) => data.id === item.id);

    if (isExist) {
      toast.warn('You have already added this to bookmark');
      return;
    }
    storedData.push(item);
    localStorage.setItem('items', JSON.stringify(storedData));
    toast.success('Item added to bookmark');
  } catch (error) {
    console.error('Error saving data to local storage:', error);
    toast.error('Error saving data to local storage');
  }
};

export { getDataFromLS, saveDataToLS };
