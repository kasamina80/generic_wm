class History < ApplicationRecord
  enum type: { it_engineer: 0, tba: 1 }
end
