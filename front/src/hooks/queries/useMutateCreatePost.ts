import {createPost} from '@/api';
import queryClient from '@/api/queryClient';
import {colors, queryKeys} from '@/constants';
import {UseMutationCustomOptions} from '@/types/common';
import {Marker} from '@/types/domain';
import {useMutation} from '@tanstack/react-query';

function useMutateCreatePost(mutationOptions?: UseMutationCustomOptions) {
  return useMutation({
    mutationFn: createPost,
    ...mutationOptions,
    onSuccess: newPost => {
      // queryClient.invalidateQueries({
      //   queryKey: [queryKeys.MARKER, queryKeys.GET_MARKERS],
      // });

      console.log('newPost', newPost);
      queryClient.setQueryData<Marker[]>(
        [queryKeys.MARKER, queryKeys.GET_MARKERS],
        existingMarkers => {
          const newMarker = {
            id: newPost.id,
            latitude: newPost.latitude,
            longitude: newPost.longitude,
            color: newPost.color,
            score: newPost.score,
          };

          return existingMarkers
            ? [...existingMarkers, newMarker]
            : [newMarker];
        },
      );
    },
  });
}

export default useMutateCreatePost;
