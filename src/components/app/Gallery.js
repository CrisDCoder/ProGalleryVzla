import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './Loader';

function Gallery({
    photos,
    total,
    totalpages,
    page,
    query,
    fetchdata
}) {
    const getMore = () => {
        console.log('get more');
        fetchdata(page+1, query, true);
    }

    return (
        <div className='gallery py-4'>
            {photos.length > 0 ?
                <div>
                    <div className="container">
                        <div className="gallery-footer mb-4">
                            <h3 className='mb-0'>
                                {query === '' ? 'Galería' : `Mostrando resultados para: ${query}`}
                            </h3>
                        </div>
                        {photos.length > 0 ?
                            <>
                                <InfiniteScroll
                                    dataLength={photos.length}
                                    loader={<Loader />}
                                    next={getMore}
                                    hasMore={photos.length < total}
                                >
                                    <div className="gallery-content-wrapper">
                                        {photos.map((item, key) => {
                                            return (
                                                <div key={key} className='gallery-img'>
                                                    <img 
                                                        src={item['urls']['thumb']} 
                                                        alt={item['alt_description']} 
                                                    />
                                                </div>
                                            );
                                        })}
                                    </div>
                                </InfiniteScroll>
                                <div className="gallery-footer mt-4">
                                    <h3 className='mb-0'>
                                        {photos.length} de {total} Fotografías.
                                    </h3>
                                </div>
                            </>
                        :
                            <>
                                <p className='mb-0'>
                                    Sin resultados.
                                </p>
                            </>
                        }
                    </div>
                </div>
                :
                <div>

                </div>
            }
        </div>
    )
}

export default Gallery