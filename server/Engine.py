import pandas as pd
import numpy as np

def get_closest_song_1NN(start_songs, all_songs, threshold=0.005, N=1):

  """
  Obtains N closest songs using improved 1-means approach
  Takes as input:
  start_songs and all_songs – lists os songs, where each song is another list,
  that consists of name and features
  
  Expected shape of these two lists is (amount of songs, amount of features in each song)
  
  Here all feature have the same necessity (no additional
  coefficients between them), i.e. MFCC or Outer Layer ANN signals
  
  Also all songs in these two lists must have the same length,
  there is no functionality for length reduction
  
  start_songs – songs, already chosen by the user
  
  all_songs – all songs that the choice can be made from, dublicates are allowed
  
  threshold – used to drop dublicates. Can be used for dropping remixes as well
  
  N - amount of songs that are expected in
  
  Returns:
  
  List of song names, recommended to listen
  
  Note:
  
  Instead of song name tuple of song name and link may be used
  
  TODO:
  
  Algorithm to use improved k-means approach for any k>0
  
  """
  res = []
  for song in start_songs:
      for check in all_songs:
          ans = calc_distance(song[1:], check[1:])
          if (ans > threshold): res.append((ans, check[0]))

  sorted_res = sorted(res, key=lambda x: x[0])
  sorted_res = cust_filter(sorted_res, r_s=1, r_e=2)
  # print(N)
  # print(sorted_res[:N])
  # print(np.shape(sorted_res[:N]))
  return [t[1] for t in sorted_res[:N]]


def calc_distance(song1features: list, song2features: list):
  """
  Calculates Euclidean distance between all features of two songs

  Input:

  song1features & song2deatures

  Both are lists of songs features (MFCC ot outer ANN layer signals)

  Returns:

  Euclidean distance between songs

  TODO:

  Test other distances (Vector similarity, Manhatten, etc.)

"""
  song1features = np.array(song1features, dtype=np.float64)
  song2features = np.array(song2features, dtype=np.float64)
  diff = song1features - song2features
  diff = diff ** 2
  ans = sum(diff) / len(diff)
  return ans


def cust_filter(input, r_s=0, r_e=2):
  """
  Removes dublicates

  Input:

  input – list of lists or tuples (that represent set of features)
  that have to be filtered

  r_s – first coeficient of features range to be filtered

  r_e – last coefficient of features range to be filtered

  Returns:

  List without dublicates

  TODO:

  Add functionality to filter based on haveing particular similarity
  (words, combinations) in song name
"""
  ans = []
  used = []

  for element in input:
      if element[r_s:r_e] not in used:
          ans.append(element)
          used.append(element[r_s:r_e])

  return ans




if __name__ == "__main__":
  dataset_name = "music.csv"

  # Load and preprocess Dataset
  dataset = pd.read_csv(dataset_name)
  dataset = dataset.dropna()
  dataset_l = dataset.values.tolist()
  # for each in dataset_l:
  #   print(each)

  # Pick start songs (we do that randomly here,
  # but it can't be anythinh as long as list of songs is passed)
  start_songs = dataset.sample(n=1)
  print(start_songs)
  print('Chosen Songs: ')
  print(start_songs.iloc[:, 0])
  start_songs = start_songs.values.tolist()
  print(start_songs)

  # Get names by finding the closest songs
  closest_songs = get_closest_song_1NN(start_songs, dataset_l, N=20)
  print('\nSystem recommends the next  songs:\n')
  for song_title in closest_songs:
      print(song_title)
