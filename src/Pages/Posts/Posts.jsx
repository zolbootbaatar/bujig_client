import React, { useEffect, useState } from 'react';
import styles from './post.module.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Posts = () => {
  const [post, setPost] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://clothes.zyberapi.site/categories/'+id+'/post')
    .then((e) => setPost(e.data.data))
    .catch((error) => alert(error));
  }, [id]);
  return (
    <>
      <div className={styles.button_container}>
        <button onClick={() => navigate(-1)} className={styles.chevButton}>
          <FontAwesomeIcon icon={faChevronLeft} className={styles.icon} />
        </button>
      </div>
      <div className={styles.container}>
        {post.map((e) => (
          <div className={styles.post}>
            <div className={styles.item}>
              <img className={styles.img} src={`https://clothes.zyberapi.site/${e.cover}`} alt="" />
            </div>
            <div className={styles.item}>
              <p>{e.title}</p>
              <p>{e.description}</p>
              <p>{e.age}</p>
              <Link to={`/postdetial/${e._id}`} className={styles.button}>detial</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Posts
