import React, {useState} from "react";
import {Button, Icon, Stack, Text, useColorModeValue} from "@chakra-ui/react";
import {HiOutlineThumbUp, HiOutlineThumbDown, HiThumbUp, HiThumbDown} from "react-icons/hi";
const random = {
  get number() {
    return Math.round(Math.random() * 10);
  },
};
const Opinion = (props: any) => {
  const [likeCount, setLikeCount] = useState(random.number);
  const [dislikeCount, setDislikeCount] = useState(random.number);
  const [canVote, setCanVote] = useState(true);
  const [canVoteLike, setCanVoteLike] = useState(true);
  const [iconVoteLikeColor, setIconVoteLikeColor] = useState("inherit");
  const [canVoteDislike, setCanVoteDislike] = useState(true);
  const [iconVoteDislikeColor, setIconVoteDislikeColor] = useState("inherit");

  const opinionPrincipalColor = useColorModeValue("blackAlpha.900", "whiteAlpha.900");
  const opinionSecColor = useColorModeValue("blackAlpha.600", "whiteAlpha.500");

  const handleVoteLike = (e: any) => {
    if (!canVote) {
      if (!canVoteLike) {
        setLikeCount(likeCount - 1);
        setCanVote(!canVote);
        setIconVoteLikeColor("inherit");
        setCanVoteLike(!canVoteLike);

        return;
      }
      //console.log("No se puede votar por ambas opciones");

      return;
    }
    setLikeCount(likeCount + 1);
    setCanVote(!canVote);
    setIconVoteLikeColor("secondary.500");
    setCanVoteLike(!canVoteLike);
  };
  const handleVoteDislike = (e: any) => {
    if (!canVote) {
      if (!canVoteDislike) {
        setDislikeCount(dislikeCount - 1);
        setCanVote(!canVote);
        setIconVoteDislikeColor("inherit");
        setCanVoteDislike(!canVoteDislike);

        return;
      }
      //console.log("No se puede votar por ambas opciones");

      return;
    }
    setDislikeCount(dislikeCount + 1);
    setCanVote(!canVote);
    setIconVoteDislikeColor("secondary.500");
    setCanVoteDislike(!canVoteDislike);
  };

  return (
    <>
      <Stack paddingTop={2}>
        <Text fontWeight="700">{props.titulo}</Text>
        <Text>{props.descripcion}</Text>
        <Stack direction="row">
          <Icon
            as={canVoteLike ? HiOutlineThumbUp : HiThumbUp}
            color={iconVoteLikeColor}
            height={5}
            width={5}
            onClick={handleVoteLike}
          />
          <Text>{likeCount}</Text>
          <Icon
            as={canVoteDislike ? HiOutlineThumbDown : HiThumbDown}
            color={iconVoteDislikeColor}
            height={5}
            transform="translateY(4px)"
            width={5}
            onClick={handleVoteDislike}
          />
          <Text>{dislikeCount}</Text>
        </Stack>
      </Stack>
    </>
  );
};

export default Opinion;
