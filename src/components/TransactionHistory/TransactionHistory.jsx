import PropTypes from 'prop-types';
import { Section, MainTitle } from 'modules/common.styled';
import { Table, Th } from './TransactionHistory.styled';
import { TransactionHistoryItem } from './TransactionHistoryItem';

export const TransactionHistory = ({ items }) => {
  return (
    <Section>
      <MainTitle>4th task - Social Profile</MainTitle>

      <Table>
        <thead>
          <tr>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Currency</Th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <TransactionHistoryItem item={item} />
            </tr>
          ))}
        </tbody>
      </Table>
    </Section>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
