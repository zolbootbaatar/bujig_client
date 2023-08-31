import React, { useEffect, useState } from 'react'
import styles from './post_detail.module.css';
import Sheet from 'react-modal-sheet';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'


const PostDetial = () => {
  const [isOpen, setOpen] = useState(false);
  const [post, setPost] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://clothes.zyberapi.site/post/${id}`)
    .then((e) => setPost(e.data))
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
        <div className={styles.item}>
          <img className={styles.img} src={`https://clothes.zyberapi.site/${post.cover}`} alt="" />
        </div>
        <div className={styles.item}>
          <p>{post.title}</p>
          <p>{post.sex}</p>
          <p>{post.age}</p>
          <p>{post.price}</p>
        </div>
        <button onClick={() => setOpen(true)} className={styles.button}>detial</button>
        <Sheet
            isOpen={isOpen}
            onClose={() => setOpen(false)}
            snapPoints={[400, 300, 100, 0]}
        >
          <Sheet.Container>
            <Sheet.Content>
              <h2 className={styles.title}>Захиалга өгөх</h2>
              <div className={styles.container_modal}>
                <div className={styles.item}>
                  <p>Contact</p>
                  <div>
                    <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
                    <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
                  </div>
                </div>
                <div className={styles.item}>
                  <p>{post.contactEmail}</p>
                  <p>{post.contactPhone}</p>
                </div>
                <button onClick={() => setOpen(false)} className={styles.button}>Back</button>
              </div>
            </Sheet.Content>
          </Sheet.Container>
        </Sheet>
      </div>
    </>
  )
}

export default PostDetial
