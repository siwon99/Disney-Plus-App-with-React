import React, { useRef } from 'react'
import useOnClickOutside from '../../hooks/useOnClickOutside';
import "./MovieModal.css"

const MovieModal = ({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen
}) => {

  const ref = useRef();

  useOnClickOutside(ref, () => {
    setModalOpen(false);
  })

  return (
    <div className='presentation' role='presentation'>
      <div className='wrapper-modal'>
        <div className='modal' ref={ref}>
          <span
            onClick={() => setModalOpen(false)}
            className='modal-close'
          >
            ✕
          </span>
          <img
          className='modal__poster-img'
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt="modal-img"
          />
          <div className="modal__content">
            <p className='modal__details'>
              <span className='modal__user_perc'>100% 당신을 위한 추천&nbsp;&nbsp;</span> 개봉일:{" "}
              {release_date ? release_date : first_air_date}
            </p>

            <h2 className='modal__title'> {title ? title : name} </h2>
            <p className='modal__aver'>평점: {vote_average} </p>
            <p className='modal__play'>▶ 재생</p>
            <p className='modal__overview'>{overview} </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieModal
