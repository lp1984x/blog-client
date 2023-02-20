import Pagination from "react-bootstrap/Pagination";

interface IPagi {
  total: number;
  perPage: number;
  current: number;
  onChangePage: any;
}

export default function Pagi({ total, perPage, current, onChangePage }: IPagi) {
  let items = [];
  if (current > 1) {
    items.push(
      <Pagination.Prev key="prev" onClick={() => onChangePage(current - 1)} />
    );
  }

  for (let page = 1; page <= total; page++) {
    items.push(
      <Pagination.Item
        key={page}
        data-page={page}
        active={page === current}
        onClick={() => onChangePage(page)}
      >
        {page}
      </Pagination.Item>
    );
  }

  if (current < total) {
    items.push(
      <Pagination.Next key="next" onClick={() => onChangePage(current + 1)} />
    );
  }

  return <Pagination>{items}</Pagination>;
}
