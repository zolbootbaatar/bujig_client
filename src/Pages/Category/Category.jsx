import React, { useEffect, useState } from 'react';
import styles from './category.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Category = () => {
  const [category, setCategory] = useState([]);
  const [sex, setSex] = useState('');
  const [age, setAge] = useState('');
  const [type, setType] = useState('');
  const sexHttp = 'sex=';
  const typeHttp = 'type=';
  const ageHttp = 'age=';

  useEffect(() => {
    axios.get( `https://clothes.zyberapi.site/categories?${sex}&${type}&${age}`)
    .then((e) => setCategory(e.data.data))
    .catch((error) => alert(error));
  }, [sex, type, age]);

  return (
    <>
    <div className={styles.container_select}>
      <div>
        <p className={styles.select_title}>Huis</p>
        <select className={styles.select} value={sex} name="sex" placeholder='sex' onChange={(e) => setSex(e.target.value)}>
          <option value="">sex</option>
          <option value={`${sexHttp}male`}>Male</option>
          <option value={`${sexHttp}female`}>Female</option>
        </select>
      </div>
      <div>
        <p className={styles.select_title}>Type</p>
        <select className={styles.select} value={type} name="sex" onChange={(e) => setType(e.target.value)}>
          <option value="">Type</option>
          <option value={`${typeHttp}hat`}>Hat</option>
          <option value={`${typeHttp}shoes`}>shoes</option>
          <option value={`${typeHttp}shirt`}>Shirt</option>
        </select>
      </div>
      <div>
        <p className={styles.select_title}>Age</p>
        <select className={styles.select} value={age} name="sex" onChange={(e) => setAge(e.target.value)}>
          <option value="">Age</option>
          <option value={`${ageHttp}1-5`}>1-5</option>
          <option value={`${ageHttp}5-10`}>5-10</option>
          <option value={`${ageHttp}10-15`}>10-15</option>
        </select>
      </div>
    </div>
      <div className={styles.container}>
        {category.map(e => (
            <Link to={`/post/${e.id}`} className={styles.link}>
              <p>нэр:  {e.name}</p>
              <p>төрөл:  {e.type}</p>
              <p>нас:  {e.age}</p>
              <p>хүйс:  {e.sex}</p>
            </Link>
        ))}
      </div>
    </>
  )
}

export default Category
