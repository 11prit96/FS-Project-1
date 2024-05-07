import useFetch from '../hooks/useFetch';

const ItemStore = () => {
    const { apiData, isLoading, serverError } = useFetch('/api/store')
    return (
        <>
            {isLoading && <p>Loading...</p>}
            {serverError && <p>{serverError}</p>}
            {apiData &&
                <ul>
                    {apiData.map((item, index) => (
                        <li key={index}>
                            <h3>{item.name}</h3>
                            <h4>{item.quantity}</h4>
                        </li>
                    )
                    )}
                </ul>
            }

        </>
    )
}

export default ItemStore
