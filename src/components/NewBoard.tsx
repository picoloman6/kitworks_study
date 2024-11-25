import { StBoardField, StBoardItem, StBoardWrapper } from '@styles/board.style';

import { BoardItem, ColumnHeader } from '@type/board';

interface Props<T extends BoardItem> {
  header: ColumnHeader<T>;
  items: T[];
  keys: (keyof T)[];
  idKey: keyof T;
}

const NewBoard = <T extends BoardItem>({
  header,
  items,
  keys,
  idKey
}: Props<T>) => {
  return (
    <StBoardWrapper>
      <StBoardItem $isHeader={true}>
        {keys.map((v) => (
          <StBoardField
            key={`column-header-${String(v)}`}
            $width={header[v]?.width || '5%'}>
            {header[v]?.label}
          </StBoardField>
        ))}
      </StBoardItem>
      {items &&
        items.map((item) => (
          <StBoardItem key={`item-${item[idKey]}`} $isHeader={false}>
            {keys.map((k) => (
              <StBoardField
                key={`field-${item[idKey]}-${String(k)}`}
                $width={header[k]?.width || '10%'}>
                {header[k]?.type === 'date'
                  ? new Date(Number(item[k])).toLocaleString()
                  : String(item[k])}
              </StBoardField>
            ))}
          </StBoardItem>
        ))}
    </StBoardWrapper>
  );
};

export default NewBoard;
